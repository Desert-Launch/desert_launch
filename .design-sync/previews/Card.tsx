import { Card, Chip, PfLink } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** A service card: icon box, title, body, one deliverable line. Three of
 *  these fill a row on desktop. */
export function ServiceGrid() {
  return (
    <Stage>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card icon="mobile" title="Mobile app development">
          One Flutter codebase published to both the App Store and Google Play. Accounts, payments,
          push notifications and offline behaviour are part of the build.
        </Card>
        <Card icon="web" title="Web development">
          Business websites, client portals, admin dashboards and full web platforms — built for
          speed, search and the one action you need visitors to take.
        </Card>
        <Card icon="mvp" title="MVP development">
          The smallest version that proves the idea with real users, on an architecture that
          survives the next three features.
        </Card>
      </div>
    </Stage>
  );
}

/** A link card: the title is the link, the whole card is the target and it
 *  lifts on hover. Only cards that actually go somewhere get this. */
export function LinkCard() {
  return (
    <Stage width={420}>
      <Card icon="booking" title="Gym & fitness booking app" href="/services/gym-booking-app/">
        A membership and session booking app for a gym, a studio or a trainer — plans, trainers,
        schedules and payments, so the front desk stops taking bookings by phone.
      </Card>
    </Stage>
  );
}

/** Composed body: a tag line under the title, flow chips, and a link row
 *  pinned to the bottom — the shape of the site's demo cards. */
export function WithChipsAndLinks() {
  return (
    <Stage width={420}>
      <Card icon="tooth" title="Demo Dental Clinic" tag="Dental clinic · Dubai · English">
        <p>
          Treatments and prices, online booking against real slot rules, and a clinic dashboard
          where the front desk finds the new appointment and the patient record it created.
        </p>
        <ul className="flex flex-wrap gap-2 list-none">
          <li>
            <Chip>Book an appointment</Chip>
          </li>
          <li>
            <Chip>Patient records</Chip>
          </li>
          <li>
            <Chip>Front-desk diary</Chip>
          </li>
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
          <PfLink href="https://dental.demos.desertlaunch.dev/" strong external>
            Open the website
          </PfLink>
          <PfLink href="https://dental.demos.desertlaunch.dev/admin" external>
            Open the dashboard
          </PfLink>
        </div>
      </Card>
    </Stage>
  );
}
