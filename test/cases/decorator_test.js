import { propTypes, defaultProps, contextTypes, childContextTypes } from '../../lib/index';
import React from 'react';
import assert from 'power-assert';
import ReactDOMServer from 'react-dom/server';
import sinon from 'sinon';

describe('decorator tests', () => {

  beforeEach(() => {
    // TODO: React < v0.14.0 uses console.warn
    sinon.spy(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  });

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

      const aComponent = <Component foo={1} />;

      assert(console.error.calledOnce);

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

      const aComponent = <Component />;

      assert(aComponent.props.foo === "defaultValue");
      assert(aComponent.props.bar === 100);

    });
  });

  describe('@contextTypes', () => {
    it('should set Component.contextTypes', () => {

      @contextTypes({
        "foo": React.PropTypes.number.isRequired
      })
      class Component extends React.Component {
        render() {
          return <div>{this.context.foo}</div>;
        }
      }

      @childContextTypes({
        "foo": React.PropTypes.any.isRequired
      })
      class Parent extends React.Component {
        getChildContext() {
          return { foo: 'hoge' };
        }

        render() {
          return <Component />;
        }
      }

      assert(Component.contextTypes.foo === React.PropTypes.number.isRequired);
      assert(Parent.childContextTypes.foo === React.PropTypes.any.isRequired);

      const aComponent = ReactDOMServer.renderToStaticMarkup(<Parent />);

      assert(console.error.calledOnce);
    });
  });

});

