// module.exports=(fn)=>{
//     return (req,res,next)=>{
//     fn(req,res,next).catch(next);
//     };
// };

module.exports = (fn) => {
    return (req, res, next) => {
      try {
        fn(req, res, next).catch((err) => {
          try {
            next(err);
          } catch (nextErr) {
            console.error('Error in next function:', nextErr);
            // Handle the error or rethrow it
          }
        });
      } catch (wrapperErr) {
        console.error('Error in wrapper function:', wrapperErr);
        // Handle the error or rethrow it
      }
    };
  };
