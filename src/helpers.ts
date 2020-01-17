import { getRepository } from "typeorm";

import { User, Asset } from "./entity/entities";

export async function seedDatabase() {
  const userRepository = getRepository(User);
  const assetRepository = getRepository(Asset);
  
  const newAsset = assetRepository.create({
    name: 'testAsset'
  })

  const asset = await assetRepository.save(newAsset);

  const newUser = userRepository.create({
    name: "test@github.com",
    avatar: asset
  });

  await userRepository.save(newUser);
}

export type Lazy<T extends object> = Promise<T> | T;