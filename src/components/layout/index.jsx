import Link from 'next/link'

const Layout = ({ children, onSearch }) => {
  return (
    <>
      <header className='content'>
        <nav className='container'>
          <ul className='unlist'>
            <li>
              <Link
                href='/'
                className='link'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/posts'
                className='link'
              >
                Posts
              </Link>
            </li>
          </ul>
          {/* <Search onSearch={onSearch} /> */}
        </nav>
      </header>

      <main className='container'>{children}</main>
    </>
  )
}

export default Layout