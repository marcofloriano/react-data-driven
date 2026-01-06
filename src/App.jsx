import Header from '/src/components/Header'
import Entry from '/src/components/Entry'
import entriesData from '/src/data'

export default function App() {
  const entries = entriesData.map( (entry) => {
    return (
      <Entry 
        img={entry.img}
        city={entry.city}
        maplink={entry.maplink}
        title={entry.title}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })
  return (
    <>
      <Header />
      <main className='container'>
        {entries}
      </main>
    </>
  )
}

