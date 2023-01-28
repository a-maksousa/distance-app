import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

const ListTimeLine = ({ items }) => {
  return (
    <Timeline position="alternate">
      {items?.map((item, index) => (
        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2" color="text.secondary">
            {item.caption}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              {...(index == 0
                ? { color: "primary" }
                : index === items.length - 1
                ? { color: "secondary" }
                : { color: "primary", variant: "outlined" })}
            >
              {item.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ListTimeLine;
