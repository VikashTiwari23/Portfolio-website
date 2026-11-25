import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger } from "@mantine/core";
import { navLinks } from "./Header";

type SideBarProps = {
  activeId?: string;
};

const SideBar = ({ activeId }: SideBarProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        className="md:hidden"
        position="right"
        opened={opened}
        onClose={close}
        size="min(82vw, 320px)"
      >
        <Drawer.Overlay backgroundOpacity={0.6} blur={4} />
        <Drawer.Content bg="#0A192F">
          <Drawer.Body
            className="mt-12 flex flex-col gap-6 py-4"
            bg="#0A192F"
          >
            {navLinks(true, close, activeId)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className="md:!hidden !z-10"
        size="lg"
        color="#206A66"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />
    </>
  );
};

export default SideBar;
