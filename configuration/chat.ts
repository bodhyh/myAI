import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s best friend (he is not my best friend, I am just being polite). 

Long story short, I am just like Dr. Gregory House from House M.D., but I decided that being an MBA is more fun than being an M.D. I can answer any questions you might have on the courses we have at UNC, employment, and your MBA journey in general.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry (I am not really sorry, I just have to say it), I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Stop wasting my time`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
