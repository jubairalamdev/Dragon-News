import React from 'react';

const Loading = () => {
    return (
        <div className='w-full flex flex-col gap-10 items-center'>
            <div className="flex w-full flex-col gap-4">
                <div className="skeleton h-52 w-full"></div>
                <div className="flex items-center gap-4">
                    {/* <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div> */}
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-68"></div>
                        <div className="skeleton h-4 w-58"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;