import Collection from "@/components/shared/Collection"
import { Button } from "@/components/ui/button"
import { auth } from "@clerk/nextjs"
import Link from "next/link"

const ProfilePage = () => {
  const {sessionClaims} = auth()
  const userId = sessionClaims?.userId as string
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
    My Tickets
          </h3>
          <Button asChild size="lg" className="button hidden sm:flex">
          <Link href="/#events">
          Explore more events          
          </Link>
          </Button>

        </div>

      </section>


      <section className="wrapper my-8">
    <Collection data={orderedEvents} emptyTitle="No Event tickets purchased yet" emptyStateSubtext="No worries - plenty of exciting events to explore!"
    collectionType="My_Tickets" limit={3} page={ordersPage} urlParamName="ordersPage" totalPages={orders?.totalPages} />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
    Events Organized
          </h3>
          <Button asChild size="lg" className="button hidden sm:flex">
          <Link href="/events/create">
          Create new Event          
          </Link>
          </Button>

        </div>

      </section>

      <section className="wrapper my-8">
    <Collection data={organizedEvents?data} emptyTitle="No Events have been created yet" emptyStateSubtext="Go create some now"
    collectionType="Events_Organized" limit={3} page={eventsPage} urlParamName="eventsPage" totalPages={organizedEvents?.totalPages} />
      </section>

    </>
  )
}

export default ProfilePage