import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Inggest function to save user data to database
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } =
      event.data;
    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      image: image_url,
    };
    await User.create(userData);
  }
);

//Inngest Function to delete the user from database
const syncUserDeletion = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await user.findByIdAndDelete(id);
  }
);

//Inngest function to Update data in database 
const syncUserUpdation = inngest.createFunction(
    { id: "sync-user-from-clerk" },
    {event: "clerk/user.updated"},
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      image: image_url,
    };
    await User.findByIdAndUpdate(id, userDate)
    }
)

export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];
