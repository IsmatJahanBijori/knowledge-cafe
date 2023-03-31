import React from 'react';

const FooterQues = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20 mb-20'>Frequently Asked Questions</h1>
           
            <div className='mx-96 mb-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-3">
                <div className="collapse-title text-xl font-medium">
                  <h3>1. Difference between props and state?</h3>
                </div>
                <div className="collapse-content text">
                    <p>Props is used to pass the data. It is immutable. Can't change its value. It is used in child component when parent component pass the any object or property by destructuring in child component. State can change its value by event triggering or anything else. It is mutable in locally and the component itself updates it. </p>
                </div>
            </div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                  <h3>2. How does useState work?</h3>
                </div>
                <div className="collapse-content">
                    <p>useState is a react hook that is used to add a state to a functional component to update it. It returns an array with two values, one is the current state and the other is a function to update the value. The Hook takes an initial state as an argument and returns an updated state value when the setter function is called. It can take an array, object, null, string or boolean value as the argument. It looks like this: const [value, setValue]=usState([])</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                  <h3>3. How does useState work?</h3>
                </div>
                <div className="collapse-content">
                    <p>useState is a react hook that is used to add a state to a functional component to update it. It returns an array with two values, one is the current state and the other is a function to update the value. The Hook takes an initial state as an argument and returns an updated state value when the setter function is called. It can take an array, object, null, string or boolean value as the argument. It looks like this: const [value, setValue]=usState([])</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                  <h3>4. How does useState work?</h3>
                </div>
                <div className="collapse-content">
                    <p>useState is a react hook that is used to add a state to a functional component to update it. It returns an array with two values, one is the current state and the other is a function to update the value. The Hook takes an initial state as an argument and returns an updated state value when the setter function is called. It can take an array, object, null, string or boolean value as the argument. It looks like this: const [value, setValue]=usState([])</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FooterQues;