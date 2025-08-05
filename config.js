export const Config = {
    // If true, the bot will automatically exchange 1000 points for 1 POP when available.
    CLAIM_POP: false,

    // If true, the script will restart the task cycle daily at the time specified in RESET_TIME.
    CYCLE_RESET: true,

    // Time to reset the daily cycle based on local machine time (in HH:MM format, 24-hour clock). Ignored if CYCLE_RESET is false.
    RESET_TIME: "00:00"
};
