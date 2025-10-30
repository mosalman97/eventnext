import { Schema, model, models, Document, Types } from "mongoose";

export interface IBooking extends Document {
	eventId: Types.ObjectId;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>({
	eventId: {
		type: Schema.Types.ObjectId,
		ref: "Event",
		required: [true, "Event id is required"],
	},
	email: {
		type: String,
		required: [true, "email is required"],
		trim: true,
		lowercase: true,
	},
});

export default BookingSchema;
