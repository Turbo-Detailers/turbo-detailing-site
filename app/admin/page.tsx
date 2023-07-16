import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "../../components/material-tailwind/TailwindComponents";
import { getSortedLimitedAmountOfBookingsFromFirestore } from "bin/firebase";

export default async function AdminPage() {
  const bookingData = await getSortedLimitedAmountOfBookingsFromFirestore();

  return (
    <div className="">
      <h1>Welcome to the Admin Page</h1>

      <h3 className="text-xl/8 font-bold">Exotic Details</h3>
      <div className="flex flex-wrap space-between gap-x-3">
        {bookingData.map((document) => (
          <Card key={document.booking_id} className="mt-6 w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {document.customer_name} - {document.service_name}
              </Typography>
              <Typography>
                {document.year} {document.make} {document.model} at{" "}
                {document.address}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 self-end">
              <Button>Read More</Button>
              <Typography>{document.customer_email}</Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
