/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import classnames from 'classnames'


export default class FilterItem extends Component {

  constructor(props) {
    super(props)
    this.state = {selected: ''}
  }

  select(typeItem) {
    this.setState({'selected': typeItem.typeCode})
  }

  selectDefault() {
    this.setState({'selected': ''})
  }

  render() {

    var getDefaultClassName = () => {
      return classnames('filter-item-single', {'selected': this.state.selected == ''})
    }

    var showItemUI = ()=> {
      if (this.props.item.typeItemList.length > 2) {
        return showItemTotal()
      }
      return showItemRespective()
    }

    var showItemRespective = ()=> {
      var getTypeItemClassName = typeItem=> {
        return classnames('filter-item-single', {'selected': typeItem.typeCode == this.state.selected})
      }

      return this.props.item.typeItemList.map((typeItem, index)=> {
        return (
          <li key={index} className={getTypeItemClassName(typeItem)}
              onClick={e=>this.select(typeItem)}>
            {typeItem.text}
          </li>
        )
      })
    }

    var showItemTotal = ()=> {
      return (
        <li className="select-option-container filter-item-single">
          <select className="filter-item-select"
                  enhance-select="filterItemCtrl.selectItemList"
                  ng-className="{'selected': filterItemCtrl.currentSelectedId !=  ''}"
                  ng-model="filterItemCtrl.currentSelectedId"
          >
          </select>
        </li>
      )
    }

    if (!this.props.item) {
      return null
    }

    return (
      <ul className={this.props.className}>
        <li className="filter-item-label">
          <label>{this.props.item.typeText}：</label>
        </li>
        <li className="flex1 filter-items">
          <ul className="filter-item-main">
            <li className={getDefaultClassName()} onClick={e=>this.selectDefault()}>不限</li>
            {showItemUI()}
          </ul>
        </li>

      </ul>
    )
  }
}
