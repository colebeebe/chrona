export type CalendarView = 'year' | 'month' | 'week' | 'day';

export type CalendarProps = {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setCurrentView: React.Dispatch<React.SetStateAction<CalendarView>>;
  navigate: {
    next: () => void;
    prev: () => void;
  };
};

export type EventType = {
  startDate: Date;
  endDate: Date;
  name: string;
  calendar: string;
  notes?: string;
};
