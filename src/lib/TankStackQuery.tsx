'use client'
import React, { ReactNode } from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

interface TankStackQueryProps {
    children: ReactNode; // `ReactNode` includes everything that can be rendered (e.g., elements, strings, fragments)
  }

const TankStackQuery : React.FC<TankStackQueryProps> = ({ children }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

export default TankStackQuery;