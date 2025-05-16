import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { LinkListItem } from './link-list-item'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function MyLinks() {
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
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
          <LinkListItem />
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
