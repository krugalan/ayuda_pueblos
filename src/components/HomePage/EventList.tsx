import { events } from '../../data/events'
import { Event } from './Event'

export const EventList = () => {
    return (<>
        {
            events.map((event) => (
                <Event key={event.id} {...event} />
            ))
        }
    </>
    )
}
