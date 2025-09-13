import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { LinkListItem } from './link-list-item'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { useQuery } from '@tanstack/react-query'
import { getMyLinks } from '@/services/links/get-my-links'
import { Skeleton } from './ui/skeleton'

export function MyLinks() {
  const { data: myLinksData, isLoading: isLoadingMyLinks } = useQuery({
    queryKey: ['my-links'],
    queryFn: async () => {
      const response = await getMyLinks()
      return response.data
    },
  })

  return (
    <div className="flex flex-col bg-white p-6 w-full rounded-lg gap-5 mt-3 mb-4 lg:col-span-3 lg:mt-0 lg:mb-0">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Meus Links</h2>
        <Button variant="secondary">
          <DownloadSimple size={16} className="mr-1.5" />
          Baixar CSV
        </Button>
      </div>

      <ScrollArea.Root className="flex flex-col lg:max-h-[380px] relative">
        <ScrollArea.Viewport>
          {isLoadingMyLinks && (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-[71px] w-full py-2 mb-2" />
              ))}
            </>
          )}
          {myLinksData?.links.map((link) => (
            <LinkListItem key={link.id} link={link} />
          ))}
          {myLinksData?.links.length === 0 && !isLoadingMyLinks && (
            <p className="text-sm text-gray-500">
              Nenhum link para visualizar. 😴
            </p>
          )}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="flex w-2 bg-gray-200 rounded-full"
        >
          <ScrollArea.Thumb className="flex-1 bg-gray-300 rounded-full" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}
