import { json, pgTable,serial ,varchar , integer} from "drizzle-orm/pg-core";

export const CarListing =pgTable('carListing',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle'),
    tagline:varchar('tagline'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    type:varchar('type').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    offerType:varchar('offerType'),
    vin:varchar('vin'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull(),
    postedOn:varchar('postedOn')
})

export const CarImages = pgTable("car_images", {
    id: serial("id").primaryKey(),
    imageUrl: varchar("image_url", { length: 255 }).notNull(), // Fixed notNull()
    carListingId: integer("car_listing_id").notNull().references(() => CarListing.id),
  });