const testObject = {test: 'test'};

const testMethod = ({[testObject.test] : test}) => {
    console.log(test);
};

export {testMethod}
