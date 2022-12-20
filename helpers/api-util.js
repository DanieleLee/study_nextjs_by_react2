
export async function getAllEvents(){
    const rsp = await fetch('https://nextjs-course1-edacb-default-rtdb.firebaseio.com/events.json')
    const data = await rsp.json();

    const events = [];

    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        
        });
    }

    return events;
}


export async function getFeaturedEvents(){
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }