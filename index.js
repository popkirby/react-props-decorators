import assign from 'object-assign';

export function propTypes(param) {
  return function(clazz) {
    clazz.propTypes = assign({}, clazz.propTypes || {}, param);
    return clazz;
  };
}

export function defaultProps(param) {
  return function(clazz) {
    clazz.defaultProps = assign({}, clazz.defaultProps || {}, param);
    return clazz;
  };
}
    
