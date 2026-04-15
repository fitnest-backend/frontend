// app/payment-error/page.tsx

import { Card } from '@/components/ui/card'
import { XCircle, AlertTriangle } from 'lucide-react'

interface Props {
  searchParams: Promise<{ reason?: string }>
}

const PaymentErrorPage = async ({ searchParams }: Props) => {
  const { reason } = await searchParams

  return (
    <div className='w-full min-h-screen p-4 flex justify-center items-center bg-primary-1000'>
      <Card className='max-w-4xl flex flex-col items-center'>

        <div className='w-18 h-18 rounded-full  flex items-center justify-center mb-2'>
          <XCircle className='text-red-500' size={40} strokeWidth={1.5} />
        </div>

        <h1 className='text-h2 leading-h2 text-center font-semibold text-primary-700'>Fitnest</h1>
        <p className='text-t2 leading-t2'>ödənişiniz uğursuz oldu</p>

        {reason && (
          <div className='w-full flex items-start gap-2 rounded-lg px-4 py-3 mt-2 text-lg'>
            <AlertTriangle size={24} className='text-red-400 mt-0.5 shrink-0' />
            <p className=' text-red-600'>{reason}</p>
          </div>
        )}
      </Card>
    </div>
  )
}

export default PaymentErrorPage


