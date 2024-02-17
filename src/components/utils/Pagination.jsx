const Pagination = ({page, lastpage, setPage}) => {

  const scrolltoTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const handlePrev = () => {
    setPage(prevState => prevState == 1 ? prevState : prevState - 1)
    scrolltoTop()
  }

  const handleNext = () => {
    setPage((prevState) => prevState == lastpage ? lastpage : prevState + 1)
    scrolltoTop()
  }
  return (
    <>
    <div className="flex justify-center gap-4">
      <button onClick={handlePrev} className="text-white">Prev</button>
      <p className="text-white">{page} of {lastpage}</p>
      <button onClick={handleNext} className="text-white">Next</button>
    </div>
    </>
  )
}

export default Pagination