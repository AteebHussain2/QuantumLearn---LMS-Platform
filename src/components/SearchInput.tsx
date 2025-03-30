'use client'

import { Search } from "lucide-react"
import Form from 'next/form'

const SearchInput = () => {
    return (
        <Form
            action="/search"
            className="relative w-full max-w-[300px] flex-1"
        >
            <input
                type="text"
                name="term"
                placeholder="Search courses... "
                className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </Form>
    )
}

export default SearchInput
