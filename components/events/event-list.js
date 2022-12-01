import EventItem from "./event-items";
import classes from './event-list.module.css';


function EventList(props){
    const { items } = props;
    return(
        <ul className={classes.list}>
            {items.map(event => 
            <EventItem
                key={event.id}
                id={event.id} 
                title={event.title} 
                location={event.location} 
                image={event.image} 
                date={event.date}>

            </EventItem>)}
        </ul>
    );
}

export default EventList;