// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const data = context.params.query
    if (data.hasOwnProperty('noAgg')){
      context.params.noAgg=data.noAgg
      delete context.params.query.noAgg
     
    }



    return context;
  };
};
