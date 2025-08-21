import React from 'react'
import { Router, Route, Switch } from 'wouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/theme-provider'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navigation from './components/Navigation'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route>
                  <div className="flex items-center justify-center min-h-[50vh]">
                    <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
                  </div>
                </Route>
              </Switch>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App