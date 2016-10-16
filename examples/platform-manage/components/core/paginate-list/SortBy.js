/**
 * Created by jiangyu2016 on 16/10/16.
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

export default class SortBy extends Component {
  static contextTypes = {
    sort: PropTypes.func
  }

  constructor() {
    super()
    this.state = {active: false, order: 'default'}
  }

  toggle() {
    this.setState({active: !this.state.active})
  }

  sort(order) {
    this.setState({order})
    this.context.sort(order)
  }

  render() {
    var defaultIcon = ()=> {
      if (this.state.order != 'default') {
        return (
          <li onClick={e=>this.sort('default')}>默认</li>
        )
      }
      return null
    }

    var ascIcon = ()=> {
      if (this.state.order != 'asc') {
        return (
          <li onClick={e=>this.sort('asc')}>
            <a>{name}</a>
            <i className="icon-arrow-desc"></i>
          </li>
        )
      }
      return null
    }

    var descIcon = ()=> {
      if (this.state.order != 'desc') {
        return (
          <li onClick={e=>this.sort('desc')}>
            <a>{name}</a>
            <i className="icon-arrow-desc1"></i>
          </li>
        )
      }
      return null
    }

    let name = this.props.children

    return (
      <div
        className={classnames({'selected': this.state.active}, {'th-select': this.state.order == 'asc'}, {'th-select1': this.state.order == 'desc'})}
        onClick={e=>this.toggle()}>
        <div className="group-ff">
          <div className="group-desc">
            <a className="link">{name}</a>
            <i
              className={classnames('arrow', {'icon-arrow-desc-red': this.state.order=='asc'}, {'icon-arrow-desc1-red': this.state.order =='desc'})}></i>
            <i className="icon-more-select"></i>
            <ul className="group-desc-arrow">
              {defaultIcon()}
              {ascIcon()}
              {descIcon()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
