import cron from 'node-cron';
import playSound from 'play-sound';
console.log('start');
cron.schedule('* * * * *', () => {
    fetch('https://tiketore.com/events/artist/43512').then(x => x.text()).then(x => {
        const availableTicket = Number(x.match(/\((\d+)\)/)[1])
        console.log(`current slot ${availableTicket}`)
        if (availableTicket > 0) {
            playSound().play(`${process.cwd()}\\sound.m4a`, (err) => {
                if (err) throw err
            });
        }
    })
});

