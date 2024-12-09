import cron from 'node-cron';

console.log('Starting local development cron server...');

// Run every minute for testing
cron.schedule('* * * * *', async () => {
    try {
        console.log('Running cron job at:', new Date().toISOString());
        
        const response = await fetch('http://localhost:3007/api/cron/process-alerts', {
            method: 'GET',
        
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log('Cron job response:', data);
    } catch (error) {
        console.error('Cron job error:', error);
    }
});

console.log('Local cron server started. Press Ctrl+C to stop.'); 