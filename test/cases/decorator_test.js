import { propTypes, defaultProps, contextTypes } from '../../lib/index';
import React from 'react';
import assert from 'power-assert';

describe('decorator tests', () => {

  describe('@propTypes', () => {
    it('should set Component.propTypes', () => {

      @propTypes({
        "foo": React.PropTypes.string,
        "bar": React.PropTypes.any
      })
      class Component extends React.Component {
        render() {
          return <div></div>;
        }
      }

      assert(Component.propTypes.foo === React.PropTypes.string);
      assert(Component.propTypes.bar === React.PropTypes.any);
    });
  });

  describe('@defaultProps', () => {
    it('should set Component.defaultProps', () => {

      @defaultProps({
        "foo": "defaultValue",
        "bar": 100
      })
      class Component extends React.Component {
        render() {
          return <div></div>;
        }
      }

      assert(Component.defaultProps.foo === "defaultValue");
      assert(Component.defaultProps.bar === 100);
    });
  });

  describe('@contextTypes', () => {
    it('should set Component.contextTypes', () => {

      @contextTypes({
        "foo": React.PropTypes.func
      })
      class Component extends React.Component {
        render() {
          return <div></div>;
        }
      }

      assert(Component.contextTypes.foo === React.PropTypes.func);
    });
  });

});

