import React from 'react'

function Footer() {
    return (
        <footer className="bg-secondColor text-gray-300 py-4">
            <div className="container mx-auto text-center">
                <p className="mb-0">
                    Created by BossMovies &copy; {new Date().getFullYear()}
                </p>
            </div>
      </footer>
    )
}

export default Footer
