// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
	selector: "#clock1",
	targetDate: new Date("September, 21 2022 18:00:00"),
});

timer1.startTimer();
