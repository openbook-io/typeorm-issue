import Express from "express";
import { createConnection, getRepository } from 'typeorm';
import { seedDatabase } from "./helpers";
import { Organization, User } from "./entity/entities";

const main = async () => {
  await createConnection();
  await seedDatabase();

  const app = Express();

  app.get(
    '/create-organization', async ({res}) => {
      const userRepository = getRepository(User);
      const organizationRepository = getRepository(Organization);

      const user = await userRepository.findOne(1)

      organizationRepository.create({
        name: 'company-name',
        owner: user
      })

      return res.json({message: 'Please read query log and see that user assets are being queried'})
    }
  );

  app.listen(9000, () => {
    console.log('server started')
  })
}

main();