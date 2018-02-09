const smartgrid = require('smart-grid');

const   settings = {
        outputStyle: 'sass',
        columns: 12,
        offset: '18px',
        container: {
            maxWidth: '1200px',
            fields: '30px'
        },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "768px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "375px",
            fields: "5px"
        }
    },
    oldSizeStyle: false
};

smartgrid('app/sass', settings);

