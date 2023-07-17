import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "../../components/material-tailwind/TailwindComponents";
import {
  getExoticBookingDataWithCustomerInformation,
  getSortedLimitedAmountOfBookingsFromFirestore,
} from "bin/firebase";
import { format, parseISO } from "date-fns";

export default async function AdminPage() {
  const bookingData = await getSortedLimitedAmountOfBookingsFromFirestore();
  const exoticBookingData = await getExoticBookingDataWithCustomerInformation();
  return (
    <div className="">
      <h1>Welcome to the Admin Page</h1>

      <h3 className="text-xl/8 font-bold">Exotic Details</h3>
      {exoticBookingData.map((document, index) => (
        <Card key={index} className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {document.name} - {format(document.date.toDate(), "LLLL d, yyyy")}
            </Typography>
            {document.vehicles.map((vehicle, index) => (
              <Typography key={index}>
                {vehicle.year} {vehicle.make} {vehicle.model} -{" "}
                {vehicle.service_name}
              </Typography>
            ))}
            <address>{document.address}</address>
          </CardBody>
          <CardFooter className="pt-0 justify-self-end">
            <Button>View Service</Button>
            <Typography>{document.email}</Typography>
          </CardFooter>
        </Card>
      ))}
      <h3 className="text-xl/8 font-bold">Luxury Details</h3>

      <div className="flex flex-wrap space-between gap-x-3">
        {bookingData.map((document) => (
          <Card key={document.booking_id} className="mt-6 w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {document.customer_name} -{" "}
                {format(document.date.toDate(), "LLLL d, yyyy")}
              </Typography>
              <Typography>
                {document.year} {document.make} {document.model} -{" "}
                {document.service_name}
              </Typography>
              <address>{document.address}</address>
            </CardBody>
            <CardFooter className="pt-0 justify-self-end">
              <Button>View Service</Button>
              <Typography>{document.customer_email}</Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
