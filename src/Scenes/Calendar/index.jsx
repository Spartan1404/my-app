import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../Components/Header";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [t, i18n] = useTranslation()
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt(t("Please enter a new title for your event"));
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.addDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `${t('Are you sure you want to delete the event?')} '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={"0 1.5rem"}>
      <Header title="Calendar" subtitle={"Full Calendar Page"} />
      {/*Events */}
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box
          flex={"1 1 20%"}
          bgcolor={colors.primary[400]}
          p={"1rem"}
          borderRadius={"4px"}
          sx={{overflowY: 'auto'}}
          maxHeight={'75vh'}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.sort((e1, e2) => e1.start.getTime() - e2.start.getTime()).map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[700],
                  margin: "0.5rem 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/*Calendar*/}
        <Box flex={"1 1 100%"} ml={"1rem"}>
          <FullCalendar
            height={"75vh"}

            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[{id: '1234', title: 'some event', date: '2024-06-01'}]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
