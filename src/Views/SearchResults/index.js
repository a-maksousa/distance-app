import {
  CalendarTodayTwoTone,
  GroupTwoTone,
  LocationCityTwoTone,
  LocationOnTwoTone,
  PushPinTwoTone,
  StraightenTwoTone,
} from "@mui/icons-material";
import { Chip, Grid, Stack, styled } from "@mui/material";
import ListTimeLine from "Components/ListTimeLine";
import Section from "Components/Section";
import { UtilContext } from "Contexts/UtilContext";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MeasureAllDistances } from "./service";

const InfoChip = styled(Chip)({
  width: "100%",
});

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [lstDistances, setDistances] = useState(null);
  const { ShowLoader, ShowError } = useContext(UtilContext);
  useEffect(() => {
    const FetchDistance = async () => {
      if (searchParams.has("origin") && searchParams.has("destination")) {
        ShowLoader(true);
        await MeasureAllDistances(
          searchParams.get("origin"),
          searchParams.getAll("intermediateCities"),
          searchParams.get("destination")
        )(setDistances, ShowError);
        ShowLoader(false);
      }
    };
    FetchDistance();
  }, []);

  return (
    <>
      <Section sx={{ pb: 6 }}>
        {searchParams.get("origin") && (
          <Grid item xs={6} md={3}>
            <InfoChip
              icon={<LocationOnTwoTone />}
              label={`City of Origin: ${searchParams.get("origin")}`}
              color="primary"
            />
          </Grid>
        )}
        {searchParams.get("destination") && (
          <Grid item xs={6} md={3}>
            <InfoChip
              icon={<PushPinTwoTone />}
              label={`City of Destination: ${searchParams.get("destination")}`}
              color="primary"
            />
          </Grid>
        )}
        {searchParams.get("dateOfTrip") && (
          <Grid item xs={6} md={3}>
            <InfoChip
              icon={<CalendarTodayTwoTone />}
              label={`Date of Trip: ${searchParams.get("dateOfTrip")}`}
              color="primary"
            />
          </Grid>
        )}
        {searchParams.get("numOdPassengers") && (
          <Grid item xs={6} md={3}>
            <InfoChip
              icon={<GroupTwoTone />}
              label={`Number of Passengers: ${searchParams.get("numOdPassengers")}`}
              color="primary"
            />
          </Grid>
        )}
      </Section>
      <Stack justifyContent="center" sx={{ transform: "translate(0,-15px)" }} direction="row">
        <Chip
          icon={<StraightenTwoTone />}
          label={`Total Distance: ${
            lstDistances?.reduce((accumulator, object) => {
              return accumulator + object?.distance;
            }, 0) || 0
          } KM`}
          color="secondary"
          sx={{ width: "20rem" }}
        />
      </Stack>
      {lstDistances && (
        <Section>
          <Grid item xs={12}>
            <ListTimeLine
              items={[
                {
                  title: searchParams.get("origin"),
                  description: "City of Origin",
                  icon: <LocationOnTwoTone />,
                },
                ...searchParams.getAll("intermediateCities").map((item) => ({
                  title: item,
                  description: "Intermediate City",
                  caption: `${lstDistances.find((dItem) => dItem.name === item)?.distance} KM`,
                  icon: <LocationCityTwoTone />,
                })),
                {
                  title: searchParams.get("destination"),
                  description: "City of Destination",
                  caption: `${lstDistances.find((item) => item.name === searchParams.get("destination"))?.distance} KM`,
                  icon: <PushPinTwoTone />,
                },
              ]}
            />
          </Grid>
        </Section>
      )}
    </>
  );
};

export default SearchResults;
