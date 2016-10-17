/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

import {calculatePageIndex} from '../../utils'

export default class PaginateList extends Component {
  static pageSize = 10

  static  childContextTypes = {
    sort: PropTypes.func
  }

  getChildContext() {
    return {
      sort: order=> this.sort(order)
    }
  }

  constructor() {
    super()
    this.state = {currentPage: 1}
  }

  getPageInfo() {
    return {
      start: this.state.currentPage,
      length: PaginateList.pageSize
    }
  }

  sort(order) {

  }

  nextPage() {
    if (this.state.currentPage < this.pageTotal) {
      this.toPage(this.state.currentPage + 1)
    }
  }

  beforePage() {
    if (this.state.currentPage > 1) {
      this.toPage(this.state.currentPage - 1)
    }
  }

  toPage(page) {
    if (this.state.currentPage != page) {
      this.setState({currentPage: page})
      this.props.getPageList()
    }
  }

  render() {

    /* - - - - - - - - - - - - - - - - - - - - - - -  */

    this.pageTotal = parseInt((this.props.total + PaginateList.pageSize - 1) / PaginateList.pageSize)
    this.pageIndexs = calculatePageIndex(this.pageTotal, this.state.currentPage)

    return (
      <div className="paginate-list">
        <div className="table relative" fix-header="" fix-left="">
          <span ng-if="paginateListCtrl.recordsTotal == 0" className="no-list-data">
              暂无数据
          </span>
          <div className="js-fix-header-container"></div>

          <div className="js-table-container">
            {this.props.children}
          </div>
        </div>

        {
          this.props.total > 0 && <div className="list-info">
            <div className="list-count-info">
            <span>
                当前第{this.state.currentPage}页，共{this.props.total}条数据
            </span>
            </div>
            <nav className="list-nav-button">
              <ul className="pagination">
                <li className={classnames({'disabled': this.state.currentPage == 1})}
                    onClick={e=>this.beforePage()}>
                  <a aria-label="Previous">
                    上一页
                  </a>
                </li>

                {
                  this.pageIndexs.map(page=> {
                    return (
                      <li key={page} className={classnames({'active': this.state.currentPage == page})}>
                        <a onClick={e=>this.toPage(page)}>{page}</a>
                      </li>
                    )
                  })
                }

                <li className={classnames({'disabled': this.state.currentPage == this.pageTotal})}
                    onClick={e=>this.nextPage()}>
                  <a aria-label="Next">
                    下一页
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        }
      </div>
    )
  }
}
