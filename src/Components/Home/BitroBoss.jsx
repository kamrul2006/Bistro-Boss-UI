import React from 'react';
import bg from "../../assets/home/chef-service.jpg"

const BitroBoss = () => {
    return (
        <div style={{ background: `url(${bg})` }} className='h-[450px] bg-cover bg-center m-20 '>
            <div className='w-full h-full object-cover bg-black/50 backdrop-blur flex items-center justify-center'>

                <div className='w-3/4 bg-white h-3/5 text-center px-20 py-16 rounded-md'>
                    <h1 className="text-4xl mb-4">Bistro Boss</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BitroBoss;