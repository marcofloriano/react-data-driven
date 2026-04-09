import Header from '/src/components/Header'
import Entry from '/src/components/Entry'
import entriesData from '/src/data'

export default function App() {
  const entries = entriesData.map( (entry) => {
    return (
      <Entry
        key={entry.id} 
        {...entry}
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

