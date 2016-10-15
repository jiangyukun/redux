/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import classnames from 'classnames'

import FilterItem from './query-filter/FilterItem'

export default class QueryFilter extends Component {

  constructor() {
    super()
    this.state = {searchKey: '', more: false, filterConditions: []}
  }

  searchKeyChange(e) {

  }

  toggleMoreState() {
    this.setState({
      more: !this.state.more
    })
  }

  removeFilterItem() {

  }

  clearAllFilterCondition() {

  }

  filter() {
    this.props.filter({
      searchKey: this.state.searchKey
    })
  }

  render() {

    var self = this;

    let buttons = this.props.children.map(child=> {
      if (child.type == 'button') {
        return child
      }
    })

    let filterItems = this.props.children.map(child=> {
      if (child.type == FilterItem) {
        return child
      }
    })

    function getContainerClassName() {
      return classnames('query-filter', self.props.className)
    }

    function getMoreBtnClassName() {
      return classnames('group-select-btn', {
        'selected': self.state.more
      })
    }

    function getSelectFilterItemClassName() {
      return classnames('child', 'group-select-more', {
        'hide': !self.state.more
      })
    }

    function getClearBtnClassName() {
      return classnames('clear', {'disabled': self.state.filterConditions.length == 0})
    }

    function showSelectFilterItem() {
      function getClassName(filterCondition) {
        return classnames('select-result select-result2 select-resultqage', {
          invalidate: filterCondition.invalidate
        })
      }

      function showErrorTipUI(filterCondition) {
        if (filterCondition.invalidate) {
          return (
            <i className="fa fa-warning filter-item-warning" title={filterCondition.errorTip}></i>
          )
        }
        return null
      }

      return self.state.filterConditions.map((filterCondition, index)=> {
        return (
          <a key={index} className={getClassName(filterCondition)}>
            <span>{typeInfo.typeText}： {typeInfo.itemText}</span>
            {showErrorTipUI()}
            <i className="icon-close" onClick={this.removeFilterItem(filterCondition)}></i>
          </a>
        )
      })
    }

    return (
      <div className={getContainerClassName()}>
        <div className="group-tools">
          <div className="filter-toolbar">
            {buttons}
          </div>
          <div className="group-search">
            <div className="group-input">
              <form>
                <input type="text" placeholder="搜索关键词" onChange={e=>this.searchKeyChange(e)}/>
                <button className="icon-search-btn" onClick={e=>this.filter()}></button>
              </form>
            </div>
            <div className={getMoreBtnClassName()} onClick={e=>this.toggleMoreState()}>
              <a>
                <span>更多筛选</span>
                <i className="icon-arrow-blue"></i>
              </a>
            </div>
          </div>
          <div>
            <div className="" className={getSelectFilterItemClassName()}>
              <div className="group-top">
                <div></div>
              </div>
              {filterItems}

              <div className="group-select-more-btm flex">
                <div style={{width: '80px'}}>筛选条件:</div>
                <div className="flex1 ">
                  <div className="clearfix">
                    {showSelectFilterItem()}
                  </div>
                </div>
                <div className="select-result">
                  <button className={getClearBtnClassName()}
                          onClick={this.clearAllFilterCondition()}
                          disabled={this.state.filterConditions.length == 0}>
                    清除
                  </button>
                  <button className="submit" onClick={this.filter()}>确定</button>
                </div>
                <div className="clear disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
