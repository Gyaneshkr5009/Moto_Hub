import React, { useEffect, useState } from 'react';
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';

function Inbox() {
    const { user } = useUser();
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if (user?.primaryEmailAddress?.emailAddress) {
            const id = user.primaryEmailAddress.emailAddress.split('@')[0];
            setUserId(id); // ✅ Set to extracted id, not userId
        }
    }, [user]);

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <SendBirdProvider
                appId={import.meta.env.VITE_SENDBIRD_APP_ID}
                userId={userId}
                nickname={user?.fullName}
                profileUrl={user?.imageUrl}
                allowProfileEdit={true}
            >
                <SendbirdApp
                    appId={import.meta.env.VITE_SENDBIRD_APP_ID}
                    userId={'udhav'} // ✅ Use dynamic userId
                    accessToken={'ACCESS_TOKEN'} // Optional, but recommended
                />
            </SendBirdProvider>
        </div>
    );
}

export default Inbox;
