import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <aside>
            <nav className='flex items-center justify-between pt-5'>
                <img src="./assets/logo.svg" className='w-10 ml-7' />
                <ul>
                  <li>
                    <a href='#' className='text-white'>HOME</a>
                  </li>
                </ul>
            </nav>
        </aside>
    )
  }
}
