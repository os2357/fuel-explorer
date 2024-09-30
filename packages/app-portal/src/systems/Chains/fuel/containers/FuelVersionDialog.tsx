import { Button, Dialog, Flex, Text, VStack } from '@fuels/ui';
import { WALLET_INSTALL_NEXT } from 'app-commons';
import { tv } from 'tailwind-variants';

type FuelVersionDialogOptions = {
  isOpen: boolean;
};

export const FuelVersionDialog = ({ isOpen }: FuelVersionDialogOptions) => {
  const classes = styles();

  return (
    <Dialog open={isOpen}>
      <Dialog.Content>
        <Dialog.Title>
          <Flex align="center" gap="2">
            Fuel Wallet Version
          </Flex>
        </Dialog.Title>
        <Dialog.Description>
          <VStack gap="4" className={classes.content()}>
            <Text>
              The current version of the Fuel Wallet you are using is not
              compatible with the Fuel Bridge.
            </Text>
            <Text>
              Please install the Fuel Wallet Development version available on
              the Chrome Web Store using the link below.
            </Text>
          </VStack>
          <Button
            className={classes.installButton()}
            as="a"
            href={WALLET_INSTALL_NEXT}
            target="_blank"
            rel="noreferrer"
            color="green"
            size="4"
          >
            Install Fuel Wallet Development
          </Button>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog>
  );
};

export const styles = tv({
  slots: {
    content: 'py-6',
    installButton: 'w-full',
  },
});
