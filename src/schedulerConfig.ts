import { BryntumSchedulerProps } from "@bryntum/scheduler-react";

const schedulerConfig: BryntumSchedulerProps = {
  startDate: new Date(2024, 2, 21, 6),
  endDate: new Date(2024, 2, 21, 20),
  viewPreset: "hourAndDay",
  eventStyle: "border",
  columns: [
    {
      type: "resourceInfo",
      text: "Name",
      field: "name",
      width: 90,
      showImage: false,
    },
    { text: "City", field: "city", width: 90 },
  ],
  stripeFeature: true,
  dependenciesFeature: true,
};

export { schedulerConfig };