import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'

export default function Home({events = []}) {
  console.log(events)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {
        events.length === 0 ? (
            <h3>No events to show</h3>
        ) : (
            events.map(evt => <EventItem key={evt.id} evt={evt}> </EventItem>)
        )
      }

      {events.map(evt => (
        <h3 key={evt.id}> {evt.name} </h3>
      ))}
    </Layout>
  )
}

export async function getStaticSideProps() {
  const res = await fetch(`$(API_URL)/api/events`)
  const events = await res.json()

  return {
    props: {events},
    revalidate: 1
  }
}