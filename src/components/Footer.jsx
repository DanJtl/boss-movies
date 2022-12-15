import React from 'react'

function Footer() {
    return (
        <footer className="bg-secondColor text-gray-300 py-4">
            <div className="container mx-auto text-center text-lg font-bold">
                <p className="my-2">
                    Created by BossMovies &copy; {new Date().getFullYear()}
                </p>
                <p className="my-2">
                    "Where even the bad movies are Boss"
                </p>
            </div>
      </footer>
    )
}

export default Footer
